export default function Home() {
  return (
    <>
<header className="topbar">
    <nav className="container nav" aria-label="主导航">
      <a className="brand" href="#">
        <span className="logo" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="8" r="2.2"/><circle cx="16.5" cy="9.5" r="1.8"/><circle cx="7" cy="11" r="1.8"/><path d="M7.5 17.2c1.1-3.2 2.8-4.8 5-4.8s3.8 1.6 4.8 4.8c.4 1.4-.5 2.8-1.9 2.8H9.4c-1.4 0-2.3-1.4-1.9-2.8Z"/></svg>
        </span>
        沐宠 Pet Spa
      </a>
      <div className="links">
        <a href="#services">洗护项目</a>
        <a href="#process">护理流程</a>
        <a href="#gallery">作品展示</a>
        <a href="#booking">预约</a>
      </div>
      <a className="btn" href="#booking">
        <svg viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>
        立即预约
      </a>
    </nav>
  </header>

  <main>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">温和洗护 · 透明护理 · 到店接送</span>
          <h1>让毛孩子干净、舒服、好看地回家</h1>
          <p>沐宠 Pet Spa 专注猫犬洗护、美容修剪、皮毛养护与基础健康观察。独立护理间、低噪吹干、宠物友好香波，让每一次洗澡都少一点紧张。</p>
          <div className="hero-actions">
            <a className="btn" href="#booking">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.14a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92Z"/></svg>
              电话咨询
            </a>
            <a className="btn secondary" href="#services">查看项目</a>
          </div>
        </div>

        <aside className="booking-panel" aria-label="营业信息">
          <h2>今日可预约</h2>
          <div className="quick-row">
            <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
            <div><strong>营业时间</strong><span>周一至周日 10:00 - 20:00</span></div>
          </div>
          <div className="quick-row">
            <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><strong>门店地址</strong><span>阳光里商业街 18 号 1F</span></div>
          </div>
          <div className="quick-row">
            <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg></span>
            <div><strong>服务承诺</strong><span>洗护前后拍照反馈，异常情况及时沟通</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <h2>按宠物状态定制洗护，不做流水线</h2>
          <p>从短毛日常清洁到长毛造型修剪，每个项目都会先评估皮肤、毛结、情绪和体型，再安排合适的护理方式。</p>
        </div>

        <div className="services">
          <article className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80" alt="小狗洗澡护理" />
            </div>
            <div className="service-body">
              <h3>基础洁净浴</h3>
              <p>清洁、耳道护理、指甲修剪、脚底毛修整、低温吹干，适合日常维护。</p>
              <div className="price"><small>起</small><span>RM 58</span></div>
            </div>
          </article>

          <article className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80" alt="宠物美容修剪" />
            </div>
            <div className="service-body">
              <h3>造型美容剪</h3>
              <p>脸型、身体、四肢和尾部造型，适合泰迪、比熊、雪纳瑞等常见犬种。</p>
              <div className="price"><small>起</small><span>RM 128</span></div>
            </div>
          </article>

          <article className="service-card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=800&q=80" alt="猫咪护理" />
            </div>
            <div className="service-body">
              <h3>猫咪温柔洗护</h3>
              <p>独立安静时段、减压安抚、基础清洁与浮毛处理，降低猫咪应激。</p>
              <div className="price"><small>起</small><span>RM 98</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" id="process">
      <div className="container split">
        <div className="feature-photo">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=82" alt="美容师照顾宠物" />
        </div>
        <div>
          <div className="section-head">
            <h2>四步完成一次安心洗护</h2>
          </div>
          <div className="steps">
            <article className="step">
              <div className="step-number">01</div>
              <div>
                <h3>到店评估</h3>
                <p>确认宠物年龄、体重、皮肤状态、毛结程度和过往护理习惯。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">02</div>
              <div>
                <h3>温和清洁</h3>
                <p>选用匹配毛质的香波，重点处理脚底、腹部、耳周等容易藏污的位置。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">03</div>
              <div>
                <h3>吹干梳理</h3>
                <p>分区吹干、梳开浮毛和轻度毛结，避免潮湿引起皮肤不适。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">04</div>
              <div>
                <h3>交付反馈</h3>
                <p>发送护理前后照片，并说明发现的耳垢、皮屑、红点或指甲问题。</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <h2>干净不只是看起来亮，也要摸起来舒服</h2>
          <p>我们会根据宠物生活方式决定护理重点：爱出门的重点清洁脚掌，长毛犬重点梳理打结区域，猫咪重点降低噪音和等待时间。</p>
        </div>

        <div className="gallery">
          <figure className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=900&q=82" alt="洗护后的狗狗" />
            <figcaption className="gallery-label">蓬松洁净</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=700&q=82" alt="护理后的猫咪" />
            <figcaption className="gallery-label">猫咪护理</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=82" alt="开心的小狗" />
            <figcaption className="gallery-label">日常洁净浴</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=700&q=82" alt="修剪造型后的宠物" />
            <figcaption className="gallery-label">造型修剪</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=82" alt="护理后的狗狗特写" />
            <figcaption className="gallery-label">皮毛养护</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="section" id="plans">
      <div className="container">
        <div className="section-head">
          <h2>常用套餐</h2>
          <p>价格会根据体型、毛量、毛结程度和宠物配合度调整，到店评估后再确认。</p>
        </div>

        <div className="plans">
          <article className="plan">
            <span className="tag">短毛日常</span>
            <h3>清爽基础包</h3>
            <p className="money">RM 58+</p>
            <ul>
              <li>温和沐浴与彻底吹干</li>
              <li>耳道清洁与指甲修剪</li>
              <li>脚底毛、肛门周边清理</li>
            </ul>
            <a className="btn secondary" href="#booking">预约这个</a>
          </article>

          <article className="plan featured">
            <span className="tag">热门选择</span>
            <h3>全身美容包</h3>
            <p className="money">RM 128+</p>
            <ul>
              <li>基础洗护全套服务</li>
              <li>全身造型修剪</li>
              <li>毛结处理与护理建议</li>
            </ul>
            <a className="btn" href="#booking">预约这个</a>
          </article>

          <article className="plan">
            <span className="tag">敏感皮毛</span>
            <h3>舒缓养护包</h3>
            <p className="money">RM 168+</p>
            <ul>
              <li>舒缓型香波与护毛护理</li>
              <li>重点观察皮屑、红痒、掉毛</li>
              <li>护理报告与居家建议</li>
            </ul>
            <a className="btn secondary" href="#booking">预约这个</a>
          </article>
        </div>
      </div>
    </section>

    <section className="section" id="booking">
      <div className="container contact">
        <div className="contact-info">
          <div>
            <h2>预约到店</h2>
            <p>填写宠物信息后，我们会尽快联系你确认时间、价格和注意事项。</p>
            <div className="contact-list">
              <div className="contact-line"><span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.14a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92Z"/></svg></span> +60 12-888 1234</div>
              <div className="contact-line"><span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></span> hello@mupetspa.com</div>
              <div className="contact-line"><span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> 阳光里商业街 18 号 1F</div>
            </div>
          </div>
        </div>

        <form className="form">
          <label>
            主人姓名
            <input type="text" name="name" placeholder="例如：王小姐" />
          </label>
          <label>
            联系电话
            <input type="tel" name="phone" placeholder="+60" />
          </label>
          <label>
            宠物类型
            <select name="pet">
              <option>狗狗</option>
              <option>猫咪</option>
              <option>其他小宠</option>
            </select>
          </label>
          <label>
            预约项目
            <select name="service">
              <option>基础洁净浴</option>
              <option>造型美容剪</option>
              <option>猫咪温柔洗护</option>
              <option>舒缓养护包</option>
            </select>
          </label>
          <label>
            期望日期
            <input type="date" name="date" />
          </label>
          <label>
            宠物体重
            <input type="text" name="weight" placeholder="例如：6kg" />
          </label>
          <label className="wide">
            备注
            <textarea name="note" placeholder="可以写下宠物年龄、是否怕吹风、是否有皮肤敏感或毛结情况"></textarea>
          </label>
          <button className="btn wide" type="button">
            <svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            提交预约
          </button>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div className="container footer-inner">
      <span>© 2026 沐宠 Pet Spa. All rights reserved.</span>
      <span>专业洗护 · 温柔护理 · 透明反馈</span>
    </div>
  </footer>
    </>
  );
}
