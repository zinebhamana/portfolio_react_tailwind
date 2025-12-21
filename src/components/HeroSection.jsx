export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking tight">
          <span className="opacity-0 animate-fade-in-delay-2">Hi, I'm</span>{" "}
          <span className="text-glow opacity-0 animate-fade-in-delay-3">Zineb</span>{" "}
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4">Hamana</span>{ " "}
        </h1>

        <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">Computer Science Student with experience in operational management and early childhood education. Curious, motivated, and eager to learn, I am developing my skills in creating simple and user-friendly digital interfaces. My goal is to combine my technical knowledge and human skills to grow in a stimulating professional environment.</p>
      </div>
    </section>
  );
};
