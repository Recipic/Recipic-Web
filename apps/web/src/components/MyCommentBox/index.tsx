import { HeartFilledIcon } from '@radix-ui/react-icons';
import { CommentProps } from '../../pages/mycomments';

const CommentComponent: React.FC<CommentProps> = ({ mainTitle, brandImage, comment, likesCount, publishDate }) => {
  return (
    <div className="flex flex-col border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full mr-4 bg-slate-200 flex justify-center items-center">{brandImage}</div>
          <h3 className="font-bold text-base">{mainTitle.length > 12 ? mainTitle.slice(0, 12) + '...' : mainTitle}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">X</button>
      </div>
      <p className="text-gray-700 mb-4 ">{comment.length > 30 ? comment.slice(0, 30) + '...' : comment}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{publishDate}</span>
        <div className="flex items-center">
          <HeartFilledIcon className="text-red-500 mr-1" />
          <span>{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
