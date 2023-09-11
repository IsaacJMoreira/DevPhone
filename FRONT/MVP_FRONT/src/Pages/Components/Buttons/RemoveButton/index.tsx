
interface RemoveButtonProps {
    onClick: () => void; 
}  
export default function RemoveButton({ onClick }: RemoveButtonProps) {
    return (
      <button className="remove-button" onClick={onClick}>
        Remover
      </button>
    );
  }
  
  
  
  
  
  
  

