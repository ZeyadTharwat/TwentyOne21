import DesignDetails from '../components/Projects5/DesignDetails'
import ProjectDetail from '../components/Projects5/ProjectDetail'
import VideoSection from '../components/Projects5/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails5 = () => {
  return (
    <>
        <HeroSection page="Project Details" breadcrumb="creations"/>
        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails5