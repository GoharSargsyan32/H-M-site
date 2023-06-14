import cls from "./bigSale.module.scss"

const BigSale = ({name,sale,text,categories}) => {
    return (
<div className={cls.sale}>
      <div className={cls.square}>
        <div className={cls.red}>
          <p>{name} sale</p>
          <h1>Up to {sale} off</h1>
          <span>{text}</span>
          <div className={cls.buttons}>
            {categories.map(item => <button>{item}</button>)}
          </div>
        </div>
      </div>
    </div>
    )
}

export default BigSale