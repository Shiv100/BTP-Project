import  { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="flex justify-center gap-6 my-8">
        <motion.a 
         href="https://resumeanalyzer-xyz.streamlit.app/"
          //href='https://huggingface.co/spaces/ShubhamUnique/resume-analyzer'
          target="_blank"
          className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Analyze Your Resume
        </motion.a>

        <motion.a 
          //href="https://resume-builder-rwxo.onrender.com/"
         // href="https://resume-builder-rho.vercel.app/"
            href="https://build-resume-lac.vercel.app/myresume" 
          target="_blank"
          className="px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Build Your Resume
        </motion.a>
        <motion.a 
          
            href="https://ai-career-guidance-xyz.streamlit.app/" 
          target="_blank"
          className="px-6 py-3 font-semibold text-white bg-red-600 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI Career Guidance
        </motion.a>
      </div>
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;