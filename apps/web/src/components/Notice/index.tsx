import { NoticeProps } from '../../pages/notice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@recipic-packages/ui';
export default function CommentComponent(props: NoticeProps) {
  const navigate = useNavigate();
  const { title, createdDate, noticeId } = props;
  const handleClick = () => {
    navigate(`/notice/${noticeId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[100%] flex flex-col border rounded-lg p-4 shadow-sm bg-white cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <h3 className="font-bold text-base">{title.length > 12 ? title.slice(0, 12) + '...' : title}</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/recipe')}
          className="text-black"
          aria-label="레시피 검색"
        ></Button>
      </div>
      <hr className="mb-4" />
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="text-3">{createdDate}</span>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
}
