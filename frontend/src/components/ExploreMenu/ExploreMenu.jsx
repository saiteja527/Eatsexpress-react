import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Indulge your taste buds with my favorite dish, a delectable fusion of flavors that tantalizes the senses and leaves a lasting impression. Savor each bite as it harmonizes perfectly with every ingredient, creating a culinary masterpiece that's simply irresistible.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    const isActive = category === item.menu_name;
                    return (
                        <div
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            key={index}
                            className={`explore-menu-list-item ${isActive ? "active" : ""}`}
                        >
                            <img src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
