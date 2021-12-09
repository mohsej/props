

import  FullName from  './components/profile/Fullname';
import  Profession from './components/profile/Profession';
import   Bio from './components/profile/Bio';
import Image from './components/profile/Image';

function App() {
  const bio ="billionaire";
  const fullName ="elon musk";
  const profession =" business man";
  const image = "https://www.journaldugeek.com/content/uploads/2021/07/template-jdg-13.jpg" ;

  return (
    <div>
      < Image image={image} />
      <FullName fullName={fullName} />
      <Bio bio = {bio} />
      <Profession profession = {profession} />

    
    </div>
  );
}

export default App;
