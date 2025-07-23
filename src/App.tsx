
// import Home from './routes/Home';
// export default Home;

// import Home from './routes/Home';
// import './App.css';
// import chairImg from './assets/Chair.png';
// import logoImg from './assets/Logo.png';
// import searchImg from './assets/Search.png';
// import basketImg from './assets/Basket.png';
// import profileImg from './assets/Profile.png';
// import heartImg from './assets/Heart.png';
// import facebookImg from './assets/Facebook.png';
// import instagramImg from './assets/Instagram.png';
// import twitterImg from './assets/Twitter.png';
// import underlineImg from './assets/Underline.png';
// import bathroomImg from './assets/BathroomTiles.png';
// import marbleImg from './assets/Marble.png';
// import outdoorImg from './assets/OutdoorFlooring.png';
// import kitchenImg from './assets/KitchenInterior.png';
// import kingdomTowerImg from './assets/KingdomTower.png';
// import dubaiMallImg from './assets/DubaiMall.png';
// import kingRoadImg from './assets/KingRoadOffices.png';
// import beachTowerImg from './assets/BeachTowerAlupang.png';
// import logoWhiteImg from './assets/LogoWhite.png';

// function App() {
//   return (
//     <div className="ecom-root">
//       <header className="ecom-header border-bottom">
//         <div className="container-fluid py-4 d-flex flex-column align-items-center">
//           <img src={logoImg} alt="Logo" className="ecom-logo-img" style={{ height: '48px', marginBottom: '0.3rem' }} />
//           <nav className="ecom-menu d-flex flex-row align-items-center justify-content-between w-100 mt-2 mb-3">
//               <div className="ecom-menu-left d-flex align-items-center" style={{ minWidth: 48, marginLeft: '-8px' }}>
//                 <img src={searchImg} alt="Search" className="ecom-search-img" style={{ height: '26px', width: '26px' }} />
//               </div>
//               <div className="ecom-menu-center d-flex flex-wrap gap-7 justify-content-center flex-grow-1" style={{ fontSize: '0.9rem' }}>
//                 <button className="ecom-menu-item btn btn-link p-0 active-menu-item" style={{ font: 'inherit' }} onClick={() => window.location.reload()}>HOME</button>
//                 <span className="ecom-menu-item">SPACES</span>
//                 <span className="ecom-menu-item">PRODUCTS & SERVICES</span>
//                 <span className="ecom-menu-item">SHOWROOMS</span>
//                 <span className="ecom-menu-item">COMPANY</span>
//                 <span className="ecom-menu-item">MEDIA</span>
//                 <span className="ecom-menu-item">CONTACT</span>
//               </div>
//               <div className="ecom-menu-right d-flex align-items-center gap-3" style={{ minWidth: 120, justifyContent: 'flex-end', marginRight: '-8px' }}>
//                 <span className="ecom-icon" title="Basket">
//                   <img src={basketImg} alt="Basket" style={{ height: '22px', width: '25px' }} />
//                 </span>
//                 <span className="ecom-icon" title="Wishlist">
//                   <img src={heartImg} alt="Wishlist" style={{ height: '22px', width: '25px' }} />
//                 </span>
//                 <span className="ecom-icon" title="Profile">
//                   <img src={profileImg} alt="Profile" style={{ height: '22px', width: '19px' }} />
//                 </span>
//               </div>
//             </nav>
//         </div>
//       </header>
//       <main style={{ position: 'relative', width: '100vw', minHeight: '676px' }}>
//         <section className="ecom-hero position-relative">
//           <img
//             src={chairImg}
//             alt="Hero Banner"
//             style={{ zIndex: 2, width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
//           />
//           <div className="ecom-hero-overlay">
//             <h1 className="ecom-hero-title">New Generation Ceramic Tile</h1>
//             <p className="ecom-hero-desc">
//               Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus meceanas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
//             </p>
//             <button className="ecom-hero-btn">LEARN MORE</button>
//           </div>
//         </section>
//         <section className="ecom-products container py-4">
//           <div className="text-center mb-3">
//             <h1 className="ecom-hero-title text-black m-0" style={{ fontSize: '3rem', marginTop: '-10px' }}>Products</h1>
//             <img src={underlineImg} alt="underline" style={{ display: 'block', margin: '6px auto' }} />
//             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
//             <p className="mt-0">been the industry's standard dummy text.</p>
//             <div className="container mt-4">
//               <div className="row g-0 justify-content-center">
//                 <div className="col-12 col-md-4">
//                   <img src={bathroomImg} alt="Bathroom Tiles" className="img-fluid w-100" style={{ objectFit: 'contain', height: '400px' }} />
//                 </div>
//                 <div className="col-12 col-md-4">
//                   <img src={marbleImg} alt="Marble" className="img-fluid w-100" style={{ height: '400px', width: '100%' }} />
//                 </div>
//                 <div className="col-12 col-md-4 d-flex flex-column" style={{ marginLeft: '-22px' }}>
//                   <img src={outdoorImg} alt="Outdoor Flooring" className="img-fluid  w-100" style={{ objectFit: 'contain', marginBottom: '3px',height: '200px' }} />
//                   <img src={kitchenImg} alt="Kitchen Interior" className="img-fluid  w-100" style={{ objectFit: 'contain',height: '200px' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="ecom-projects container py-4">
//           <div className="text-center mb-3">
//             <h1 className="ecom-hero-title text-black m-0" style={{ fontSize: '3rem', marginTop: '-10px' }}>Projects</h1>
//             <img src={underlineImg} alt="underline" style={{ display: 'block', margin: '6px auto' }} />
//             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
//             <p className="mt-0">been the industry's standard dummy text.</p>
//             <div className="container mt-4">
//               <div className="row g-0 justify-content-center">
//                 <div className="col-12 col-md-3" style={{ padding: '10px' }}>
//                   <img src={kingdomTowerImg} alt="Kingdom Tower" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
//                 </div>
//                 <div className="col-12 col-md-3" style={{ padding: '10px' }}>
//                   <img src={dubaiMallImg} alt="Dubai Mall" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
//                 </div>
//                 <div className="col-12 col-md-3" style={{ padding: '10px' }}>
//                   <img src={kingRoadImg} alt="King Road Offices" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
//                 </div>
//                 <div className="col-12 col-md-3" style={{ padding: '10px' }}>
//                   <img src={beachTowerImg} alt="Beach Tower Alupang" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
//                 </div>
//               </div>
//               <div className="text-center mt-3">
//                 <button className="btn px-4" style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0' }}>VIEW ALL</button>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="ecom-secondary-images container py-4">
          
//         </section>
//       </main>
//       <footer className="ecom-footer mt-0">
//         <div className="container-fluid">
//           <div className="row ecom-footer-columns text-center text-md-start">
//             <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
//               <div className="ecom-footer-title">
//                 <img src={logoWhiteImg} alt="2Hats" style={{ height: '48px' }} />
//               </div>
//               <div className="ecom-footer-socials d-flex justify-content-center justify-content-md-start gap-2 mt-2">
//                 <a href="#" aria-label="Facebook">
//                   <img src={facebookImg} alt="Facebook" style={{ height: '16px', width: '16px' }} />
//                 </a>
//                 <a href="#" aria-label="Twitter">
//                   <img src={twitterImg} alt="Twitter" style={{ height: '16px', width: '16px' }} />
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                   <img src={instagramImg} alt="Instagram" style={{ height: '16px', width: '16px' }} />
//                 </a>
//               </div>
//             </div>
//             <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
//               <div className="ecom-footer-heading">About</div>
//               <div className="ecom-footer-list">
//                 <div>About Us</div>
//                 <div>Careers</div>
//                 <div>Sustainability</div>
//               </div>
//             </div>
//             <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
//               <div className="ecom-footer-heading">Support</div>
//               <div className="ecom-footer-list">
//                 <div>Help Center</div>
//                 <div>Contact</div>
//                 <div>FAQs</div>
//               </div>
//             </div>
//             <div className="col-12 col-md-3 ecom-footer-col">
//               <div className="ecom-footer-heading">Contact information</div>
//                 <div>&copy; 3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, 
// An Nuzhah, Riyadh 12474, 
// Saudi Arabia</div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;
