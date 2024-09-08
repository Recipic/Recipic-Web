import React, { useState } from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { ImageIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { DrawerCloseButton } from '@/components/recipe/DrawerCloseButton';
import { BottomFixedButtonWithGradientDiv } from '@/components/common/Buttons/BottomFixedButtonWithGradientDiv';
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

export default function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <PageLayout>
      <Header title="프로필 설정" order="second" />
      <TopNavBar order="first" />
      <div className="mb-6 grid grid-cols-1 gap-8 mt-24 px-4 py-12">
        {/* 프로필 편집 */}
        <div className="flex flex-col justify-center items-center">
          <Button
            onClick={handleOpen}
            type="button"
            variant="outline"
            className="w-32 h-32 flex-shrink-0 rounded-full relative bg-slate-100"
          >
            <div className="flex flex-col items-center text-gray-400 text-sm">프로필 편집</div>
            <div className="absolute right-3 top-24 bg-white translate-x-1/2 -translate-y-1/2 rounded-full p-2 shadow">
              <Pencil2Icon className="h-6 w-6 text-gray-400" />
            </div>
          </Button>
        </div>
        {/* 닉네임 편집 */}
        <div>
          <Label className="text-gray-500 text-xs">닉네임</Label>
          <Input placeholder="변경할 닉네임을 입력해주세요."></Input>
        </div>
        {/* 소개글 작성 */}
        <div>
          <Label className="text-gray-500 text-xs">자기 소개</Label>
          <TextArea placeholder="본인을 나타낼 수 있는 소개글을 작성해주세요." className="h-32"></TextArea>
          <BottomFixedButtonWithGradientDiv onClick={handleProfileSave} buttonText="변경사항 저장하기" />
        </div>
      </div>
      {/* 프로필 이미지 편집 */}
      <Drawer open={isOpen} onOpenChange={open => !open && handleClose()}>
        <DrawerContent className="max-w-screen-lg mx-auto h-auto flex flex-col px-4">
          <DrawerHeader>
            <DrawerTitle className="text-left pb-2">프로필 이미지 변경</DrawerTitle>
            <hr />
            <div className="grid grid-1 gap-4">
              <div className="rounded py-2 hover:bg-gray-100">앨범에서 선택</div>
              <hr />
              <div className="rounded py-2 hover:bg-gray-100">기본 이미지로 변경</div>
            </div>
          </DrawerHeader>
          <Button className="mb-4" onClick={handleClose}>
            닫기
          </Button>
        </DrawerContent>
      </Drawer>
    </PageLayout>
  );
}

const handleProfileSave = () => {
  // TODO: 프로필 편집 변경사항 저장
};

export interface userInfoProps {
  nickName: string; // 닉네임
  profileImg: string; // 프로필
  description: string; //자기소개
}
