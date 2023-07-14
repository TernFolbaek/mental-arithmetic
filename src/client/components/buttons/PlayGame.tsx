type PlayGameProps = {
    onPlay: () => void;
  };
  
  export const PlayGame: React.FC<PlayGameProps> = ({ onPlay }) => {
    return (
      <button className="rounded bg-neutral-200 px-2 py-2 text-1xl border-neutral-400 border-2 text-black hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]" onClick={onPlay}>
        Play Game
      </button>
    );
  };
  