const About = () => {
  return (
    <div className="flex flex-col items-center gap-8 m-6">
      <h1 className="text-2xl font-bold">The clock application</h1>
      <div className="max-w-2xl">
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
