const inputStyles = `focus border border-gray-100 px-4 py-2`;

function Form() {
  return (
    <form className="bg-gray-50 px-5 py-8">
      <h4 className="relative mb-4 mt-6 pb-2 text-2xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red">
        Leave Us Your Info
      </h4>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name*" className={inputStyles} />
        <input
          type="text"
          placeholder="E-mail Address*"
          className={inputStyles}
        />
        <select className={inputStyles}>
          <option value="" disabled selected>
            Select Class
          </option>
          <option value="body building">Body Building</option>
          <option value="cycling">Cycling</option>
          <option value="meditation">Meditation</option>
          <option value="workout">Workout</option>
          <option value="karate">Karate</option>
        </select>
        <textarea
          placeholder="Comment"
          className={`${inputStyles} h-32 max-h-44`}
        />
        <button className="self-center bg-red px-8 py-4 font-semibold uppercase text-white">
          Submit now
        </button>
      </div>
    </form>
  );
}

export default Form;
