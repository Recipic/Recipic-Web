import React, { useState } from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { ImageIcon, Pencil2Icon } from '@radix-ui/react-icons';
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
  return (
    <PageLayout>
      <Header title="프로필 설정" order="second" />
      <TopNavBar order="first" />
      <div className="mb-6 grid grid-cols-1 gap-8 mt-24 px-4 py-6">
        {/* 프로필 편집 */}
        <Label className="text-gray-500 text-xs">프로필 이미지 편집</Label>
        <div className="flex flex-col justify-center items-center">
          <Button type="button" variant="outline" className="w-32 h-32 flex-shrink-0 rounded-full relative">
            <div className="flex flex-col items-center">
              <ImageIcon className="h-6 w-6 mb-1 text-gray-400" />
            </div>
            <div className="absolute right-3 top-24 transform translate-x-1/2 -translate-y-1/2">
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
          <BottomFixedButtonWithGradientDiv buttonText="변경사항 저장하기" />
        </div>
      </div>
    </PageLayout>
  );
}

export interface userInfoProps {
  nickName: string; // 닉네임
  profileImg: string; // 프로필
  description: string; //자기소개
}
