import DesignDetails from '../components/Project2/DesignDetails'
import ProjectDetail from '../components/Project2/ProjectDetail'
import VideoSection from '../components/Project2/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails2 = () => {
  return (
    <>
        <HeroSection back='/our-creations' page="Project Details" breadcrumb="creations"/>

        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails2