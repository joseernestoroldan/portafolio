import React from 'react'

const menu = ['home', 'about', 'work', 'skills', 'contact'];

const NavigationDots = ({active}) => {
  return (
      <div className='app__navigation'>
          
        {
            menu.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#503036' } : { }}
                >
                </a>
            ))
        }
          
      </div>
  )
}

export default NavigationDots