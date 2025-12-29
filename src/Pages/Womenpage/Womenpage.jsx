import React from 'react'
import { womanData } from '../../stores/data/woman';
import "./Womenpage.css"
const Womenpage = () => {
  return (
       <div className="pagesection">
                                    {womanData.map((item) => {
                                      return (
                                        <div className="women" key={item.id}>
                                          
                                          <div className="pageimg">
                                            <img src={item.image} alt={item.model} />
                                          </div>
                              
                                          <div className="promodel">
                                            {item.company} {item.model}
                                          </div>
                              
                                          <div className="price">${item.price}</div>
                              
                                          <div className="description">{item.description}</div>
                              
                                          {/* BUY NOW BUTTON */}
                                          <button className="buybtn">Buy Now</button>
                              
                                        </div>
                                      );
                                    })}
                                  </div>
                                );
                              };
  

export default Womenpage;
