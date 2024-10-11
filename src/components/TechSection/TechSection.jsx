import { techIcons } from '../../utils/TechIcons/TechIcon'
import { TechImage } from '../../utils/TechImages/TechImage'
import { TechMain } from './style'

export function TechSection() {
  const techImages = techIcons
  return (
    <TechMain>
      {techImages &&
        techImages.map((item, index) => (
          <div key={index}>
            <TechImage
              size={71}
              animation
              src={item?.image}
              alt={`${item?.name} icone`}
            />
            <h2>{item?.name}</h2>
          </div>
        ))}
    </TechMain>
  )
}
