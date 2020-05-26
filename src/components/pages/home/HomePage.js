import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="bg">
            <div id="field-container">
                <div className="info">
                    <div className="logo">
                        <h1>TEAM UP</h1>
                        <p>电影制作分区</p>
                    </div>
                    <div className="intro">
                        <div className="what">
                            <h3>我们提供</h3>
                            <p>TEAM UP 提供项目导向的地区分组服务，您可以创建或加入一个当地项目组并于组员协作完成项目。
                                在电影制作分区中，您可以以导演，编剧，演员，摄影，灯光，布景，后期等身份加入小组并为项目做出贡献。
                            </p>
                        </div>
                        <div className="about">
                            <h3>关于我们</h3>
                            <p>TEAM UP 网页由一群曾经On Wisconsin的贝吉獾制作，为提高各个领域的项目合作效率与机会而存在。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;