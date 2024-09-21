import DesignDetails from '../components/Projects/DesignDetails'
import ProjectDetail from '../components/Projects/ProjectDetail'
import VideoSection from '../components/Projects/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails = () => {
  return (
    <>
        <HeroSection back='/our-creations' page="Project Details" breadcrumb="creations"/>
        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails