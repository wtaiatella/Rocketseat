import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import { CommentType } from "../types/Types";
import style from "./Comment.module.css";
import { Avatar } from "./avatar";

interface CommentProps {
  comment: CommentType;
  onDeleteComment: (id: number) => void;
  onAddLike: (likes: number, id: number) => void;
}

export function Comment(props: CommentProps): React.ReactElement {
  const { author, content, publishedAt, likes, id } = props.comment;

  const publishedDateFormattted = format(
    publishedAt,
    "dd 'de' MMMM 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleDeleteComment = () => {
    props.onDeleteComment(id);
  };

  const handleAddLike = () => {
    props.onAddLike(likes + 1, id);
  };

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormattted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleAddLike}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
