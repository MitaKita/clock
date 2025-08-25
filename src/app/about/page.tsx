const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 py-16 px-4 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-cyan-700">The Clock Application</h1>
        <p>
          This is an application built with Next.js and TypeScript. Next.js provides a powerful framework for building server-rendered React applications, while TypeScript adds static typing for improved code quality and maintainability. Together, they enable rapid development of scalable and robust web applications with modern best practices.
        </p>
        <p className="mt-4">
          The application features a variety of clock styles, including analog and digital clocks, as well as customizable color options for the clock hands, background, and frame. Users can select their preferred clock style and colors from a user-friendly interface.
        </p>
        <p className="mt-4">
          The state management is handled using Redux Toolkit, which simplifies the process of managing application state with a set of powerful tools and abstractions. This allows for easy updates to the clock configuration and ensures that the UI stays in sync with the underlying state.
        </p>
        <p className="mt-4">
          Overall, this clock application demonstrates the capabilities of Next.js and TypeScript for building modern web applications with a focus on user experience and customization.
        </p>
      </div>
    </div>
  );
}

export default About;
