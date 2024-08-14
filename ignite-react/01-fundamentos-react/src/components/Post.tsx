import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useEffect, useRef, useState } from "react";
import { CommentType, PostType } from "../types/Types";
import { Comment } from "./Comment";
import style from "./Post.module.css";
import { Avatar } from "./avatar";

const comments: CommentType[] = [
  {
    id: 1,
    postId: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    type: "paragraph",
    content: "Fala galera 👋, aqui é o Maik",
    publishedAt: new Date("2022-05-03 20:00:00"),
    likes: 18,
  },
  {
    id: 1,
    postId: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    type: "paragraph",
    content: "Fala galera 👋, aqui é o Diego",
    publishedAt: new Date("2022-05-03 20:00:00"),
    likes: 15,
  },
];

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps): React.ReactElement {
  console.log(post);
  const { author, content, publishedAt, id } = post;

  const [postComments, setPostComments] = useState<CommentType[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const postComments = comments.filter((comment) => comment.postId === id);
    setPostComments(postComments);
  }, [id]);

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

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newCommentText.trim() !== "") {
      const newComment: CommentType = {
        id: comments.length + 1,
        postId: id,
        author: {
          avatarUrl: "https://github.com/maykbrito.png",
          name: "Wagner Elias",
          role: "Estudante @Rocketseat",
        },
        type: "paragraph",
        content: newCommentText,
        publishedAt: new Date(),
        likes: 0,
      };

      setPostComments([...postComments, newComment]);
      setNewCommentText("");
      if (submitButtonRef.current) {
        submitButtonRef.current.blur();
      }
    }
  }

  const handleNewCommentText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.currentTarget.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = postComments.filter(
      (comment) => comment.id !== commentId
    );

    setPostComments(updatedComments);
  };

  const handleNewCommentInvalid = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    event.currentTarget.setCustomValidity("O comentário não pode ser vazio");
  };

  const handleAddLike = (likes: number, commentId: number) => {
    const updatedComments = postComments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes };
      }

      return comment;
    });

    setPostComments(updatedComments);
  };

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormattted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((content) => {
          if (content.type === "paragraph") {
            return <p key={content.content}>{content.content}</p>;
          }
          if (content.type === "link") {
            return (
              <p key={content.content}>
                <a>{content.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button
            type="submit"
            ref={submitButtonRef}
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        {postComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={handleDeleteComment}
            onAddLike={handleAddLike}
          />
        ))}
      </div>
    </article>
  );
}
