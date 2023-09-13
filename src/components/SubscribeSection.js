const SubscribeSection = () => (
  <div className="bg-black py-16">
    <div className="container mx-auto flex py-4">
      <div className="w-8/12">
        <h2 className="text-white text-4xl font-bold">
          Want tips & tricks to optimize your flow?
        </h2>
        <p className="text-white mt-2">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div className="w-4/12">
        <form className="flex my-6">
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-md px-3 grow"
          />
          <button
            type="submit"
            className="bg-green text-black px-9 py-3 rounded-md"
          >
            Notify Me
          </button>
        </form>
        <p className="text-white">
          We care bout the protection of your data. Read our
          <br />
          <a href="#!" className="text-green">
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default SubscribeSection;
