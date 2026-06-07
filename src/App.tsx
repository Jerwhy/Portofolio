/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <LoadingScreen />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
