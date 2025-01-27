export const setCategory = (category: string) => {
    return {
      type: 'SET_CATEGORY',
      payload: category,
    };
  };
  
  export default setCategory; // Default export eklenmeli
  