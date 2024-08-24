import { HeartFilledIcon } from '@radix-ui/react-icons';
import { CommentProps } from '../../pages/mycomments';
import { useNavigate } from 'react-router-dom';
const CommentComponent: React.FC<CommentProps> = ({
  mainTitle,
  brandImage,
  comment,
  likesCount,
  publishDate,
  recipieId,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipies/${recipieId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[90%] flex flex-col border rounded-lg px-4 shadow-sm bg-white cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-1 mt-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-4 bg-slate-200 flex justify-center items-center">{brandImage}</div>
          <h3 className="font-bold text-base">{mainTitle.length > 12 ? mainTitle.slice(0, 12) + '...' : mainTitle}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">X</button>
      </div>
      <hr className="mb-4" />
      <p className="text-gray-700 mb-4">{comment.length > 30 ? comment.slice(0, 22) + '...' : comment}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="text-sm">{publishDate}</span>
        <div className="flex items-center mb-2">
          <HeartFilledIcon className="text-pink-500 mr-1" />
          <span className="text-sm">{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
