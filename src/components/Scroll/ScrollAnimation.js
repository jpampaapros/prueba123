import React from 'react';
import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function ScrollAnimation() {
  return (
    <>
      <LinkScroll activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} offset={-100}>Test 1</LinkScroll>
      <div style={{height: '1000px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur consequuntur debitis dignissimos doloremque ducimus et expedita explicabo ipsa necessitatibus non nostrum numquam quia ratione recusandae repellendus repudiandae, veniam!
      </div>
      <Element name="test1" className="element">
      </Element>
      <div style={{height: '1000px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur consequuntur debitis dignissimos doloremque ducimus et expedita explicabo ipsa necessitatibus non nostrum numquam quia ratione recusandae repellendus repudiandae, veniam!
      </div>
    </>
  );

}