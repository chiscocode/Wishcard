import React from 'react'
import AboutPic from '../img/people.e641c0c5.png';
import Icon1 from '../img/person-6.abe0b27c.png';
import Icon2 from '../img/left-hand-saying-ok.a5fe2cdc.png';
import Icon3 from '../img/person-7.2fd93341.png';
import Icon4 from '../img/right-hand-pointing-left.ffa6a95f.png';
import Header from './Header'



const About = () => {
  return (
    <>
    
    <Header/>
    <div className='container'>
        <h1 style={{fontSize:'3rem',fontWeight:'bold'}} className="text-center">
        About <span style={{color:'#582b95'}}>Wishcard</span>
        </h1>
        <p className='text-center'>We offer a convenient way to get your wishlist fulfilled by friends and family</p>
        <div className="text-center">
        <img className='about-pic' src={AboutPic} alt='pic' />
        </div>

        <div className="row">
            <div className="col-md-2 side">
              <img src={Icon1} width='200' alt="pic"/>
              <img src={Icon2} width='200' alt="pic"/>
            </div>
            <div className="col-md-8">
                <h1 className="text-center" style={{fontSize:'3rem',fontWeight:'bold'}}>We’re in the business of wishes</h1>
                <p>Commodo enim est sint ut dolor do dolore proident sit ipsum fugiat. Cillum excepteur incididunt enim laborum. Nostrud in nisi id dolor aliquip Lorem duis occaecat fugiat Lorem laboris. Deserunt nisi do in nostrud irure ut. Adipisicing sint ut sint mollit nisi consectetur sunt officia qui eu et. Cupidatat elit cillum dolor nostrud fugiat nisi dolor excepteur. In culpa et quis duis enim aliquip sint proident deserunt consequat aliqua magna. Sunt dolor anim veniam amet est pariatur culpa ullamco do et nisi ea ut incididunt. Sint ipsum nulla et reprehenderit occaecat amet minim in mollit dolore. Et ut duis reprehenderit qui ipsum fugiat dolor elit excepteur exercitation est non culpa do. Proident qui occaecat sunt cupidatat enim pariatur dolore do ipsum voluptate officia consectetur eu velit. Enim officia culpa Lorem ipsum sint. Commodo laboris ut officia occaecat ipsum Lorem dolor consequat nisi do. Sunt reprehenderit pariatur cillum deserunt veniam nisi non anim. Consequat mollit sunt ex voluptate. Nulla aute nostrud proident sunt eiusmod laborum aliquip et eiusmod occaecat sit ex tempor. Dolore aute eiusmod nostrud magna velit nostrud non Lorem. Do deserunt do consequat ut proident nisi officia ullamco dolor. Adipisicing ut excepteur quis nostrud tempor quis id tempor consectetur duis exercitation deserunt ad amet. Est eiusmod excepteur nostrud amet minim.</p>

            </div>
            <div className="col-md-2 side">
              <img src={Icon3} width='200' alt="pic"/>
              <img src={Icon4} width='200' alt="pic"/>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About