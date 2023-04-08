export default function MainSkillsComponent({ skills }) {
  return (
    <div className="mt-12 mb-12  flex flex-wrap  align-middle gap-x-10 text-clip tracking-wide whitespace-normal lg:whitespace-pre sm:break-words">
      {skills?.map((skill) => {
        return (
          <>
            <div
              className="rounded-lg bg-purple-100 text-sm  text-purple-800 mr-4 my-4 px-4 py-2"
              onClick={() => {
                console.log(skill);
              }}
            >
              {skill}
              <span className="rounded-full  bg-purple-800  border-black  h-22 w-22"></span>
            </div>

            {/* <span class="relative flex h-3 w-3 mr-24 mt-24"> */}
            {/* {skill} */}
            {/* <span class="absolute inline-flex h-full w-full rounded-full bg-purple-800 opacity-75"></span> */}
            {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-800"></span> */}
            {/* </span> */}
          </>
        );
      })}
    </div>
  );
}
