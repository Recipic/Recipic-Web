import React, { useState, useEffect } from 'react';
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
  Carousel,
} from '@recipic-packages/ui';
import { DrawerCloseButton } from '@/components/Buttons/DrawerCloseButton';

const recipeFormSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  brand: z.string().min(1, '브랜드를 선택해주세요'),
  category: z.string().min(1, '카테고리를 선택해주세요'),
  ingredients: z
    .array(
      z.object({
        ingredientId: z.number(),
        name: z.string(),
        quantity: z.number().min(0, '수량은 0 이상이어야 합니다.'),
        unit: z.string(),
        calorie: z.number(),
        cost: z.number(),
      }),
    )
    .min(1, '재료를 추가해주세요'),
  images: z.array(z.instanceof(File)).min(1, '이미지를 최소 하나 이상 추가해주세요'),
  description: z.string().min(1, '레시피 설명을 입력해주세요'),
  isPublic: z.enum(['public', 'private']),
});

type TRecipeFormValues = z.infer<typeof recipeFormSchema>;

type TWriteRecipeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TImagePreview = {
  file: File;
  preview: string;
};

export function WriteRecipeDrawer({ isOpen, onClose }: TWriteRecipeDrawerProps) {
  const form = useForm<TRecipeFormValues>({
    resolver: zodResolver(recipeFormSchema),
    defaultValues: {
      ingredients: ingredientsOptions,
      isPublic: 'private',
      images: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  const [previewImages, setPreviewImages] = useState<TImagePreview[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const mappedFiles = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPreviewImages([...previewImages, ...mappedFiles]);
    form.setValue('images', [...form.getValues('images'), ...files]);
  };

  const handleRemoveImage = (index: number) => {
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
    const newFiles = form.getValues('images');
    newFiles.splice(index, 1);
    form.setValue('images', newFiles);
  };

  const handleQuantityChange = (id: number, delta: number) => {
    const currentIngredients = form.getValues('ingredients');
    const updatedIngredients = currentIngredients.map(ingredient => {
      if (ingredient.ingredientId === id) {
        return {
          ...ingredient,
          quantity: Math.max(0, ingredient.quantity + delta),
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

  /** Drawer 닫기 버튼을 눌렀을 때 폼을 초기화 */
  const handleDrawerClose = () => {
    form.reset(); // 폼 값을 초기화
    setPreviewImages([]); // 이미지 미리보기 초기화
    onClose(); // Drawer 닫기
  };

  return (
    <Drawer open={isOpen} onOpenChange={open => !open && onClose()}>
      <DrawerContent className="max-w-screen-lg mx-auto h-[100dvh] flex flex-col">
        <DrawerCloseButton onClick={handleDrawerClose} />
        <DrawerHeader>
          <DrawerTitle>레시피 등록하기</DrawerTitle>
          <DrawerDescription>여러분의 특별한 꿀조합을 공유해요!</DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-grow overflow-y-auto px-4">
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
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>이미지 ({previewImages.length}/10)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" multiple onChange={handleImageChange} />
                  </FormControl>
                  <Carousel>
                    {previewImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.preview}
                          alt="Preview"
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <Button onClick={() => handleRemoveImage(index)} className="absolute right-0 top-0">
                          X
                        </Button>
                      </div>
                    ))}
                  </Carousel>
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
                    <select {...field} className="w-full p-2 border rounded">
                      <option value="">선택하세요</option>
                      <option value="brand1">브랜드1</option>
                      <option value="brand2">브랜드2</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>재료 선택</FormLabel>
                  <FormControl>
                    <div className="p-4">
                      {fields.map((ingredient, index) => (
                        <div key={ingredient.ingredientId} className="flex items-center justify-between mb-4">
                          <div>
                            {ingredient.name} {ingredient.quantity} {ingredient.unit}
                          </div>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => handleQuantityChange(ingredient.ingredientId, -ingredient.quantity)}>
                              -
                            </Button>
                            <Button onClick={() => handleQuantityChange(ingredient.ingredientId, ingredient.quantity)}>
                              +
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
                    <textarea
                      {...field}
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="레시피 설명을 입력해주세요"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPublic"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>공개 여부</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="public" />
                        </FormControl>
                        <FormLabel className="font-normal">유명인 레시피</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="private" />
                        </FormControl>
                        <FormLabel className="font-normal">나만의 레시피</FormLabel>
                      </FormItem>
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
            <Button className="flex-1 h-12" onClick={form.handleSubmit(onSubmit)}>
              업로드
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

// TODO:  재료 목 데이터
const ingredientsOptions = [
  {
    ingredientId: 1,
    name: '자바칩',
    quantity: 1,
    unit: '개',
    calorie: 45.6,
    cost: 600,
  },
  {
    ingredientId: 2,
    name: '초코 드리즐',
    quantity: 10,
    unit: 'g',
    calorie: 45.6,
    cost: 600,
  },
];
