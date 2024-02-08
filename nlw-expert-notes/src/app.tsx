import logo from './assets/logo-nlw-expert.svg'

export function App(){
  return (
    <div className="mx-auto max-w6xl my-12">
      <img src={logo} alt='NLW Expert'/>

      <form className='w-full outline'>
        <input
         type="text" 
         placeholder='Busque em suas notas...'
         className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500' />
      </form>

      

    </div>
  )
}