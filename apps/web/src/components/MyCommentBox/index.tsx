import { HeartFilledIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Comment } from '@/types/myComments';
import { useNavigate } from 'react-router-dom';
import { Button } from '@recipic-packages/ui';
export default function CommentComponent(props: Comment) {
  const navigate = useNavigate();
  const { recipeTitle, content, likeCount, recipeId } = props;
  const handleClick = () => {
    navigate(`/recipe/${recipeId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[100%] flex flex-col border rounded-lg p-4 shadow-sm bg-white cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <h3 className="font-bold text-base">
            {recipeTitle?.length > 12 ? recipeTitle?.slice(0, 20) + '...' : recipeTitle}
          </h3>
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
      <p className="text-gray-700 mb-4 ">{content?.length > 30 ? content?.slice(0, 30) + '...' : content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="text-3">2024-08-29</span>
        <div className="flex items-center">
          <HeartFilledIcon className="text-pink-500 mr-1" />
          <span className="text-3">{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
