import { useTranslation } from "react-i18next"
import tanks from './data.js'


const Tank = () => {

    const { t } = useTranslation("about")
    
    return (
        <div className="gallery">
            {tanks.map((tank) => {
                const name = t(`${tank.id}.name`, { defaultValue: tank.id });
                const description = t(`${tank.id}.description`, {
                    defaultValue: 'Description not available'
                });

                return (
                    <div key={tank.id} className="card">
                        <div className="card-image">
                            <img src={tank.imgUrl} alt={name} />
                        </div>
                        <div className="card-title">
                            <p>{name}</p>
                            <img src={tank.nation} alt={name} />
                        </div>
                        <div className="card-description">
                            <p>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export { Tank }
