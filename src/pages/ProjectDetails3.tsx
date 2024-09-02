import DesignDetails from '../components/Project3/DesignDetails'
import ProjectDetail from '../components/Project3/ProjectDetail'
import VideoSection from '../components/Project3/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails3 = () => {
  return (
    <>
        <HeroSection page="Project Details" breadcrumb="projects"/>
        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails3