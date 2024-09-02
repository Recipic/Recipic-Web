import React, { useEffect, useRef } from 'react';
import { Cross2Icon, MinusIcon, PlusIcon, ImageIcon } from '@radix-ui/react-icons';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  RadioGroup,
  RadioGroupItem,
  Label,
  TextArea,
} from '@recipic-packages/ui';
import { DrawerCloseButton } from '@/components/recipe/DrawerCloseButton';
import { brands } from '@/constants/brands';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import { TIngredient } from '@/types/recipe';
import { TBrandEn } from '@/types/brand';
import { CustomSelect } from '@/components/common/CustomSelect';

const recipeFormSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요').max(20, '제목은 최대 20자까지 입력할 수 있습니다'),
  brand: z.string().min(1, '브랜드를 선택해주세요'),
  ingredients: z
    .array(
      z.object({
        ingredientId: z.string(),
        ingredientName: z.string(),
        quantity: z.number(), // 서버에서 받은 증감 단위
        selectedQuantity: z.number().min(0, '수량은 0 이상이어야 합니다.'), // 실제 선택된 수량
        unit: z.string(),
        calorie: z.number(),
        cost: z.number(),
      }),
    )
    .min(1, '재료를 추가해주세요'),
  images: z
    .array(
      z.object({
        file: z.instanceof(File),
        preview: z.string(),
      }),
    )
    .min(1, '이미지를 추가해주세요')
    .max(1, '이미지는 최대 1개까지 추가할 수 있습니다'),
  description: z.string().min(1, '레시피 설명을 입력해주세요'),
  isCelebrity: z.boolean({
    required_error: '공개 여부를 선택해주세요',
  }),
});

type TRecipeFormValues = z.infer<typeof recipeFormSchema>;

type TWriteRecipeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ingredientsOptions: TIngredient[] = [
  {
    ingredientId: 'zava',
    ingredientName: '자바칩',
    quantity: 1,
    unit: '개',
    calorie: 45.6,
    cost: 600,
  },
  {
    ingredientId: 'choco',
    ingredientName: '초코 드리즐',
    quantity: 10,
    unit: 'g',
    calorie: 45.6,
    cost: 600,
  },
];

const brandOptions = brands.map((brand: TBrandEn) => ({
  value: brand,
  label: formatBrandToHangeul(brand),
}));

export function WriteRecipeDrawer({ isOpen, onClose }: TWriteRecipeDrawerProps) {
  const form = useForm<TRecipeFormValues>({
    resolver: zodResolver(recipeFormSchema),
    defaultValues: {
      title: '',
      brand: '',
      ingredients: ingredientsOptions.map(ingredient => ({
        ...ingredient,
        selectedQuantity: 0, // 초기 선택 수량은 0으로 설정
      })),
      images: [],
      description: '',
      isCelebrity: false,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control: form.control,
    name: 'images',
  });

  const handleQuantityChange = (id: string, isIncrease: boolean) => {
    const currentIngredients = form.getValues('ingredients');
    const updatedIngredients = currentIngredients.map(ingredient => {
      if (ingredient.ingredientId === id) {
        const newSelectedQuantity = isIncrease
          ? ingredient.selectedQuantity + ingredient.quantity
          : Math.max(0, ingredient.selectedQuantity - ingredient.quantity);
        return {
          ...ingredient,
          selectedQuantity: newSelectedQuantity,
        };
      }
      return ingredient;
    });
    form.setValue('ingredients', updatedIngredients);
  };

  const onSubmit = (data: TRecipeFormValues) => {
    console.log(data);
    // TODO: 데이터 처리 로직 추가
    onClose();
  };

  const handleTempSave = () => {
    // TODO: 임시저장 로직 구현
  };

  const handleDrawerClose = () => {
    form.reset();
    onClose();
  };

  useEffect(() => {
    return () => {
      form.getValues('images').forEach(image => URL.revokeObjectURL(image.preview));
    };
  }, [form]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const currentImageCount = imageFields.length;
    const availableSlots = 1 - currentImageCount;

    if (files.length > availableSlots) {
      alert(`최대 1장의 이미지만 업로드할 수 있어요`);
      return;
    }

    const mappedFiles = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    appendImage(mappedFiles);
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Drawer open={isOpen} onOpenChange={open => !open && handleDrawerClose()}>
      <DrawerContent className="max-w-screen-lg mx-auto h-[100dvh] flex flex-col">
        <DrawerCloseButton onClick={handleDrawerClose} />
        <DrawerHeader>
          <DrawerTitle>레시피 등록하기</DrawerTitle>
          <DrawerDescription>여러분의 특별한 꿀조합을 공유해요!</DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            id="recipe-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="pb-4 space-y-8 flex-grow overflow-y-auto px-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>제목</FormLabel>
                  <FormControl>
                    <Input placeholder="레시피 제목" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={() => (
                <FormItem>
                  <FormLabel>이미지</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleImageUploadClick}
                        className="w-20 h-20 flex-shrink-0"
                      >
                        <div className="flex flex-col items-center">
                          <ImageIcon className="h-6 w-6 mb-1 text-gray-400" />
                          <p className="text-semibold14 text-gray-400">{imageFields.length}/1</p>
                        </div>
                      </Button>
                      {imageFields.map((image, index) => (
                        <div key={image.id} className="relative w-20 h-20">
                          <img src={image.preview} alt="Preview" className="w-full h-full object-cover rounded" />
                          <Button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 rounded-full p-0 w-5 h-5"
                            size="icon"
                          >
                            <Cross2Icon className="h-3 w-3 text-white" />
                          </Button>
                        </div>
                      ))}

                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        ref={fileInputRef}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>브랜드</FormLabel>
                  <FormControl>
                    <CustomSelect<string>
                      items={brandOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="브랜드를 선택해주세요"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={() => (
                <FormItem>
                  <FormLabel>옵션 재료 (선택)</FormLabel>
                  <FormControl>
                    <div className={'px-2'}>
                      {fields.map(ingredient => (
                        <div key={ingredient.id} className="flex items-center justify-between mb-2">
                          <p className="text-black text-regular16">
                            {ingredient.ingredientName} {ingredient.selectedQuantity} {ingredient.unit}
                          </p>
                          <div className="flex items-center gap-1">
                            <Button
                              className="w-7 h-7"
                              onClick={() => handleQuantityChange(ingredient.ingredientId, false)}
                              size="icon"
                              disabled={ingredient.selectedQuantity === 0}
                            >
                              <MinusIcon className="h-5 w-5" />
                            </Button>
                            <Button
                              className="w-7 h-7"
                              onClick={() => handleQuantityChange(ingredient.ingredientId, true)}
                              size="icon"
                            >
                              <PlusIcon className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>레시피 설명</FormLabel>
                  <FormControl>
                    <TextArea placeholder="레시피 설명을 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCelebrity"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>레시피 여부</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={value => field.onChange(value === 'true')}
                      value={field.value ? 'true' : 'false'}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="celebrity" />
                        <Label htmlFor="celebrity" className="font-normal">
                          유명인 레시피
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="personal" />
                        <Label htmlFor="personal" className="font-normal">
                          나만의 레시피
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DrawerFooter>
          <div className="flex w-full gap-2">
            <Button className="flex-1 h-12" variant="secondary" onClick={handleTempSave}>
              임시저장
            </Button>
            <Button className="flex-1 h-12" type="submit" form="recipe-form">
              업로드
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
