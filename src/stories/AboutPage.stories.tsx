import type { Meta, StoryObj } from "@storybook/react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Virtual Pet Simulator
        </h1>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to Virtual Pet Simulator, where you can adopt and care for
            your very own digital companion! Our platform provides a fun and
            engaging way to experience pet ownership in a virtual environment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 mb-6">
            Choose your perfect pet, give them a name, and start your journey
            together. Feed them, play with them, and watch their happiness grow.
            Each interaction affects your pet's stats, making the experience
            dynamic and engaging.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            We aim to bring joy and companionship through virtual pet care,
            while teaching responsibility and nurturing skills in a fun,
            interactive way.
          </p>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof AboutPage> = {
  title: "Pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {};
