"use client";

import "./styles.css";
import logo from '../../../assets/images/logo.png';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import  "bootstrap/dist/css/bootstrap.min.css"

export default function HeaderComponent() {
  const router = useRouter();
  const moveToDashboard = () => {
    router.push('/');
  };

  return (
    <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <Image
        src={logo}
        className='img-fluid rounded logo-align'
        alt='example'
      />
      <div className="fw-bold app-name" onClick={moveToDashboard}>bp M&C Operations</div>
      <span className="user-icon fw-bold"><i className="bi bi-person"></i></span>
    </header>
  );
}