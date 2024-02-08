import logo from './assets/logo-nlw-expert.svg'

export function App(){
  return (
    <div className="mx-auto max-w6xl my-12 space-y-6">
      <img src={logo} alt='NLW Expert'/>

      <form className='w-full'>
        <input
         type="text" 
         placeholder='Busque em suas notas...'
         className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500' />
      </form>

      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-3 auto-rows-[250px gap-6'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
          <p className='text-sm leading-6 text-slate-400'>Grave ...</p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
        <span className='text-sm font-medium text-slate-300'> há dois dias</span>
          <p className='text-sm leading-6 text-slate-400'>Grave ...</p>
          <div className='absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />

        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3  overflow-hidden relative'>
        <span className='text-sm font-medium text-slate-300'>há quatro dias</span>
          <p className='text-sm leading-6 text-slate-400'>Grave ...</p>
          <div className='absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0' />

        </div>

      </div>

    </div>
  )
}