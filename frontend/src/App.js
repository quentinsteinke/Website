import { React, useState } from 'react';
import Button from './components/Button';
import { Article, ArticleThumbnail} from './components/Article';
import { MainMenu } from './components/Menu';


const mockData = [
  {
      id: 1,
      title: "The Evolution of 3D Printing in Contemporary Art",
      autor: "Alex Morgan",
      date: "2023-10-27",
      summary: "Over the past decade, 3D printing has transformed from a niche technology to a mainstream art tool. This article delves into the ways artists are utilizing 3D printing to bring their visions to life, challenging traditional art boundaries.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio. Massa tincidunt dui ut ornare lectus. Condimentum mattis pellentesque id nibh tortor id aliquet. Ut placerat orci nulla pellentesque. Faucibus et molestie ac feugiat sed lectus vestibulum. Integer enim neque volutpat ac tincidunt vitae semper quis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Adipiscing elit duis tristique sollicitudin. Et ligula ullamcorper malesuada proin libero nunc consequat. \n Platea dictumst vestibulum rhoncus est pellentesque. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Justo laoreet sit amet cursus sit amet dictum. Quisque non tellus orci ac auctor augue mauris augue. Dui accumsan sit amet nulla facilisi morbi. Enim diam vulputate ut pharetra. Nisl purus in mollis nunc sed id. Maecenas ultricies mi eget mauris pharetra et. Urna neque viverra justo nec. Malesuada bibendum arcu vitae elementum curabitur. Orci sagittis eu volutpat odio. Tortor at risus viverra adipiscing. Nisl condimentum id venenatis a condimentum vitae sapien. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pharetra convallis posuere morbi leo urna molestie at. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Non odio euismod lacinia at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio. Massa tincidunt dui ut ornare lectus. Condimentum mattis pellentesque id nibh tortor id aliquet. Ut placerat orci nulla pellentesque. Faucibus et molestie ac feugiat sed lectus vestibulum. Integer enim neque volutpat ac tincidunt vitae semper quis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Adipiscing elit duis tristique sollicitudin. Et ligula ullamcorper malesuada proin libero nunc consequat. Platea dictumst vestibulum rhoncus est pellentesque. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Justo laoreet sit amet cursus sit amet dictum. Quisque non tellus orci ac auctor augue mauris augue. Dui accumsan sit amet nulla facilisi morbi. Enim diam vulputate ut pharetra. Nisl purus in mollis nunc sed id. Maecenas ultricies mi eget mauris pharetra et. Urna neque viverra justo nec. Malesuada bibendum arcu vitae elementum curabitur. Orci sagittis eu volutpat odio. Tortor at risus viverra adipiscing. Nisl condimentum id venenatis a condimentum vitae sapien. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pharetra convallis posuere morbi leo urna molestie at. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Non odio euismod lacinia at.",
      image: "mockImage1.png"
  },
  {
      id: 2,
      title: "Virtual Reality: Future of Interactive Art Galleries",
      autor: "Jamie Lee",
      date: "2023-09-14",
      summary: "With VR technology becoming more accessible, art galleries are beginning to embrace the digital realm. This piece explores the potential of virtual galleries, from interactive exhibits to global accessibility.",
      content: "Virtual Reality is not just for gamers anymore. The art world is seeing a massive transformation with the advent of VR, allowing for immersive exhibitions and global reach...",
      image: "mockImage2.png"
  },
  {
      id: 3,
      title: "The Renaissance of Claymation",
      autor: "Taylor Smith",
      date: "2023-08-05",
      summary: "Claymation, once a staple of early animation, is experiencing a resurgence thanks to advancements in 3D scanning and modeling. Discover how artists and filmmakers are blending old techniques with new technologies.",
      content: "Gone are the days when Claymation was restricted to childhood cartoons. Today, with the blend of 3D tech, it's making a notable comeback in the cinematic and art world...",
      image: "mockImage3.png"
  },
  {
      id: 4,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage4.png"
  },
  {
      id: 5,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage5.png"
  },
  {
      id: 6,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage6.png"
  },
  {
      id: 7,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage7.png"
  },
  {
      id: 8,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage8.png"
  },
  {
      id: 9,
      title: "The Future of Art: Augmented Reality",
      autor: "Alex Morgan",
      date: "2023-07-12",
      summary: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways.",
      content: "Augmented Reality is changing the way we experience art. From museums to city streets, this technology is bringing art to life in new and exciting ways...",
      image: "mockImage9.png"
  },
];


function App() {
  const [selectedArticle, setSelectedArticle] = useState(mockData[0]); // by default, select the first article

  return (
    <div className="App flex h-screen">
      <aside className="w-1/4 bg-customBlueLight p-4 overflow-y-auto">
        <input
          className="rounded-lg border-b-2 border-l-2 border-customBlueDark p-2 mb-4 w-full"
          type='text'
          placeholder="Search..."
        />
        <ul>
          {mockData.map(article => (
          <li key={article.id}>
            <button onClick={() => setSelectedArticle(article)}>
              <ArticleThumbnail title={article.title} autor={article.autor} date={article.date} summary={article.summary} image={article.image} />
            </button>
          </li>
          ))}
        </ul>
      </aside>

      <main className="w-3/4 p-4 bg-gray-700 overflow-y-auto">
        <MainMenu />
        <Article
          title={selectedArticle.title}
          autor={selectedArticle.autor}
          date={selectedArticle.date}
          image={selectedArticle.image}
          summary={selectedArticle.summary}
          content={selectedArticle.content}
        />
      </main>
    </div>
  );
}

export default App;
