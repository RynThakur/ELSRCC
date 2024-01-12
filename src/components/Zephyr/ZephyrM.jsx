import React, { useState } from 'react';
import './zephyrm.css';

const ZephyrM = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const handleImageClick = (index, galleryType) => {
    setSelectedImage(index);
    setSelectedGallery(galleryType);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedGallery(null);
  };

  const merakiImages = [
    require('/Users/aryanthakur/Documents/els2/src/assets/m1.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m2.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m6.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m10.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m13.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m8.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m4.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m5.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m7.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m3.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m9.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/m12.JPG')
];
const minervaImages = [
    require('/Users/aryanthakur/Documents/els2/src/assets/mi1.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/mi2.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/mi3.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/mi4.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/mi5.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/mi6.JPG'),
];
const stmImages = [
    require('/Users/aryanthakur/Documents/els2/src/assets/stm1.JPG'),
    require('/Users/aryanthakur/Documents/els2/src/assets/stm2.JPG')

];
  return (
    <section className="zm-wrapper">
      <div className="paddings innerWidth zm-container">
        <div className="flexColStart zm-headings">
          <span className="primaryText">ZEPHYR</span>
          <span id="zidd" className="orangeText">2023</span>
          <div className="flexColStart zm-content">
            <p className="secondaryText">
            Our society has been a second home to many famous personalities as
              well - including Sanjeev Sanyal - Principal Economic Advisor to
              the Prime Minister of India - notably he was once the secretary of
              our very own ELS. He graced us with his presence during our annual
              Fest, Zephyr. Literally meaning ‘gentle breeze’, Zephyr has the
              ever-opposite impact of its etymology. It has the sole purpose of
              providing a platform to engage, express, debate and discuss. Every
              year, we bring together a diverse mix of the greatest writers,
              thinkers, leaders and entertainers on one stage to articulate and
              interact with young minds. Our speaker sessions not only consist
              of notable individuals of academics and literature but influencers
              such as Kusha Kapila, Naman Kumar, Gunjan Saini and Kenneth
              Sebastian, who enticed the audience with their exhilarating
              performances. They attract an unprecedented turnout from all over
              the University every year. We host a myriad of competitions
              ranging from research, slam poetry and improv battles, with
              enticing cash prizes no less!
            </p>

            <span className="paddings innerWidth primaryText">Meraki- The Slam Poetry Competition</span>
            <div className='gallery meraki'>
              {merakiImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Meraki Image ${index + 1}`}
                  onClick={() => handleImageClick(index, 'meraki')}
                />
              ))}
            </div>

            <span className="paddings innerWidth primaryText">Minerva- The Research Paper Writing Competition</span>
            <div className='gallery minerva'>
              {minervaImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Minerva Image ${index + 1}`}
                  onClick={() => handleImageClick(index, 'minerva')}
                />
              ))}
            </div>

            <span className="paddings innerWidth primaryText">Spin the Myth- A Storytelling Competition</span>
            <div className='gallery stm'>
              {stmImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`stm Image ${index + 1}`}
                  onClick={() => handleImageClick(index, 'stm')}
                />
              ))}
            </div>

            {/* Expanded view modal */}
            {selectedImage !== null && (
              <div className={`modal ${selectedGallery}`} onClick={handleCloseModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <span className="close" onClick={handleCloseModal}>&times;</span>
                  <img
                    src={selectedGallery === 'meraki' ? merakiImages[selectedImage] :
                          selectedGallery === 'minerva' ? minervaImages[selectedImage] :
                          selectedGallery === 'stm' ? stmImages[selectedImage] : ''}
                    alt={`${selectedGallery} Image ${selectedImage + 1}`}
                  />
                </div>
              </div>
            )}
            <span className="paddings innerWidth orangeText">Details of Competitions</span>
            <p className="secondaryText innerWidth">
              Meraki- The Slam Poetry Competition, Minerva- The Research Paper Writing Competition, Shipwreck- The Debating Competition, Are you Skitting Me?- A Fun Improv Battle, Spin the Myth- A storytelling Competition, Cinema Holics- A quiz competition on movies and the film industry. In addition to our speaker sessions and competitions, we take great pride in organizing a plethora of entertaining activities - the highlight being Bollywood Day. From Piku to Geet, from Patrick Bateman or rather his Indian version - Prateek Batman - we had it all. The fun doesn’t end here - This year too the spectators were left captivated by the performances of notable dance groups within and outside DU such as VDefyn from IIT Delhi, Verve from Sri Venkateswara College as well as Harsh Sharma - Singer, Songwriter, and Producer. With heartwarming melodies, foot-tapping beats, and unforgettable memories; Zephyr 2023 became an evening to remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZephyrM;

// Your CSS remains unchanged
