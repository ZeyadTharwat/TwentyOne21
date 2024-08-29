import DesignDetails from '../components/Projects/DesignDetails'
import ProjectDetail from '../components/Projects/ProjectDetail'
import VideoSection from '../components/Projects/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails = () => {
  return (
    <>
        <HeroSection page="Project Details" breadcrumb="projects"/>
        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails