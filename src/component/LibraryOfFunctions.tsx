export const Verif = ()=>{
  const rand: string = Math.random().toFixed(20);
  const value: string = Date.now() + rand.replace('0.','');
  return {value};
};