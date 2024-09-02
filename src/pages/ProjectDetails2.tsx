import DesignDetails from '../components/Project2/DesignDetails'
import ProjectDetail from '../components/Project2/ProjectDetail'
import VideoSection from '../components/Project2/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails2 = () => {
  return (
    <>
        <HeroSection page="Project Details" breadcrumb="projects"/>
        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails2