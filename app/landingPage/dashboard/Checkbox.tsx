export default function Checkbox() {
    return (
      <div className="flex items-center">
        <input
          id="heart-checkbox"
          type="checkbox"
          className="hidden peer"
        />
        <label
          htmlFor="heart-checkbox"
          className="text-gray-400 peer-checked:text-red-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21C7.803 16.16 5 13.368 5 9.72 5 7.065 7.065 5 9.72 5c1.372 0 2.752.74 3.58 1.92C14.528 5.74 15.908 5 17.28 5 19.935 5 22 7.065 22 9.72c0 3.648-2.803 6.44-7 11.28z"
            />
          </svg>
        </label>
      </div>
    );
  }
  