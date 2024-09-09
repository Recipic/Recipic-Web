import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { BottomFixedButtonWithGradientDiv } from '@/components/common/Buttons/BottomFixedButtonWithGradientDiv';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, TextArea } from '@recipic-packages/ui';
import { useDrawer } from '@/hooks/useDrawer';
import EditProfileImageDrawer from '@/components/editProfile/EditProfileImageDrawer';
import EditProfileImageButton from '@/components/editProfile/EditProfileImageButton';
import { userEditProfileData } from '@/constants/mocks';

const profileFormSchema = z.object({
  nickname: z.string().min(2, '닉네임은 2글자 이상이어야 합니다.').max(10, '닉네임은 10글자 이하여야 합니다.'),
  introduction: z.string().max(100, '자기소개는 100자 이내로 작성해주세요.').optional(),
  profileImage: z.string().optional(),
});

type TProfileFormValues = z.infer<typeof profileFormSchema>;

export default function EditProfile() {
  const { isOpen, open, close } = useDrawer();
  const form = useForm<TProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      nickname: userEditProfileData.nickname || '',
      introduction: userEditProfileData.introduction || '',
      profileImage: userEditProfileData.userProfileImageSrc || '',
    },
  });

  const onSubmit = (data: TProfileFormValues) => {
    console.log(data);
    // TODO: 프로필 편집 변경사항 저장 로직 api 연동
    // api 요청 후 blob URL을 revoke 해야 함
    if (data.profileImage && data.profileImage.startsWith('blob:')) {
      URL.revokeObjectURL(data.profileImage);
    }
  };

  return (
    <PageLayout>
      <Header title="프로필 설정" order="second" />
      <TopNavBar order="first" />
      <Form {...form}>
        <form
          id="edit-profile-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-8 mt-24 px-4 py-12"
        >
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <EditProfileImageButton
                    onClickToOpenDrawer={open}
                    profileImageSrc={field.value || userEditProfileData.userProfileImageSrc}
                  />
                </FormControl>
                <EditProfileImageDrawer
                  isOpen={isOpen}
                  onClose={close}
                  onImageSelect={blobUrl => {
                    field.onChange(blobUrl);
                    close();
                  }}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold16">닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="변경할 닉네임을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="introduction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold16">자기 소개</FormLabel>
                <FormControl>
                  <TextArea placeholder="본인을 나타낼 수 있는 소개글을 작성해주세요." className="h-32" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <BottomFixedButtonWithGradientDiv
            type="submit"
            form="edit-profile-form"
            onClick={form.handleSubmit(onSubmit)}
            buttonText="변경사항 저장하기"
          />
        </form>
      </Form>
    </PageLayout>
  );
}
