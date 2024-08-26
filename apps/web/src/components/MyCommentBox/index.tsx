import { HeartFilledIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { CommentProps } from '../../pages/mycomments';
import { useNavigate } from 'react-router-dom';
import { Button } from '@recipic-packages/ui';
export default function CommentComponent(props: CommentProps) {
  const navigate = useNavigate();
  const { mainTitle, brandImage, comment, likesCount, publishDate, recipieId } = props;
  const handleClick = () => {
    navigate(`/recipies/${recipieId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[100%] flex flex-col border rounded-lg p-4 shadow-sm bg-white cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full mr-4 bg-slate-200 flex justify-center items-center">{brandImage}</div>
          <h3 className="font-bold text-base">{mainTitle.length > 12 ? mainTitle.slice(0, 12) + '...' : mainTitle}</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/recipe')}
          className="text-black"
          aria-label="레시피 검색"
        >
          <MagnifyingGlassIcon className="h-7 w-7" />
        </Button>
      </div>
      <hr className="mb-4" />
      <p className="text-gray-700 mb-4 ">{comment.length > 30 ? comment.slice(0, 30) + '...' : comment}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="text-3">{publishDate}</span>
        <div className="flex items-center">
          <HeartFilledIcon className="text-pink-500 mr-1" />
          <span className="text-3">{likesCount}</span>
        </div>
      </div>
    </div>
  );
}
