import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans leading-relaxed tracking-wide">
      <main className="container mx-auto px-6 py-10">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Fake News Is Easy!
            </h2>

            <p className="text-justify text-gray-800 leading-relaxed mb-4">
            Fake News has been prevalent in the last decade. It has been a catalyst for shaping politics and contributes to the polarization of our political climate. In an essay by Libing (2024), it is discussed that misinformation negatively contributes to globalization, as besides affecting critical thinking skills and media literacy, it erodes social cohesion from the online echo chambers that were created.  The rise of misinformation has eroded trust in traditional media and journalism (Libing, 2024). 
            </p>

            <p className="text-justify text-gray-800 leading-relaxed mb-4">
            The 2016 United States Elections are viewed as a flashpoint for fake news, showing the power of mass misinformation campaigns on swaying public opinion. After this, many countries in Europe and Asia also experienced some form of democratic backsliding (Libing, 2024), which is especially familiar in the Philippines. In a report by Ong and Cabanes (2018), they allege that the web of disinformation during the Duterte preisdency has been weathered by a cabal of elite PR strategists and “digital sweatshops” of influencers and fake accounts. 
            </p>

            <p className="text-justify text-gray-800 leading-relaxed mb-4">
            However, in the past years, disinformation has been supercharged with the rise of generative AI tools. A recent paper by Elhoussainy (2024) discusses viral political “deep fake” images over the past years, with affected countries including the United States, France, Russia and Israel. These images are made by popular tools such as Midjourney, Copilot, AI Studio, Prompts, and Dall-E, which generate images from text-based prompts. Furthermore, its virality is deemed to be consequential as it affected into the issues of the respective countries: the 2024 US election, the 2023 French pension protests, the Russia-Ukraine war, and the Israel-Hamas war. Thus, a survey was conducted and deemed “deep fakes” and artificial intelligence techniques to be a threat to a country’s national security (Elhoussainy, 2024).            </p>

            <p className="text-justify text-gray-800 leading-relaxed mb-4">
            To demonstrate how easy it is to spread disinformation on social media with large language models, I created the Engagement Calculator and the Spinbot using OpenAI’s GPT-4o language model. The first tool, the Engagement Calculator, uses GPT-4o to analyze small tweets and relate their virality and possibility to mislead the average social media user. Meanwhile, the Spinbot looks at possible attack angles that adversaries or the public to a user-generated post. While testing the program for consumption, it averaged out to $0.01 for 10 queries.
            </p>

            <p className="text-justify text-gray-800 leading-relaxed mb-4">
            While both tools may exaggerate or hold back due to the content policies of the OpenAI platform, both tools demonstrate how easy it is to mislead and spread false information in social media, and importantly, show the role of LLMs in the global tide of misinformation in today’s fast-paced digital world. 
            </p>

            <div className="flex justify-center">
              <button className="px-6 py-2 text-white bg-red-500 hover:bg-blue-600 focus:ring-4 focus:ring-red-300 rounded-lg">
                Engagecal
              </button>

              <button className="px-6 py-2 ml-1 text-white bg-green-500 hover:bg-blue-600 focus:ring-4 focus:ring-green-300 rounded-lg">
                Spinbot
              </button>
            </div>

            <div className="references">
              <h2 className="text-xl font-bold text-gray-800 mb-4">References</h2>
              <div className="mb-4">
                <p className="text-gray-700">
                Elhoussainy, H. A. (2024). <span className="italic">The Role of Artificial Intelligence Techniques in Spreading Rumors and Fake News, and Their Effect on National Security.</span> المجلة العلمية لبحوث الصحافة, 2024(30), 1-59.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                Gjerazi, B. (2024). <span className="italic">Media Literacy in the Era of Globalization: Innovative Strategies for Decoding Information.</span> Interdisciplinary Journal of Research and Development, 11(1 S1), 18-18.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                Libing, L. <span className="italic">FAKE NEWS AND INFORMATION WARFARE IN THE AGE OF GLOBALIZATION: IDEOLOGICAL MANIPULATION AND SOCIAL CONSEQUENCES.</span>
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                Ong, J. C., & Cabañes, J. V. (2018). <span className="italic">Architects of networked disinformation: Behind the scenes of troll accounts and fake news production in the Philippines.</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

    </div>
  );
};

export default Home;
