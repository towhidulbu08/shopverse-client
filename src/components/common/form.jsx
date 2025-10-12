import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const types = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const renderInputsByComponentType = (getControllItem) => {
    let element = null;
    const value = formData[getControllItem.name] || "";

    switch (getControllItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            name={getControllItem.name}
            placeholder={getControllItem.placeholder}
            id={getControllItem.name}
            type={getControllItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControllItem.name]: e.target.value,
              })
            }
          />
        );

        break;

      case types.SELECT:
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControllItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControllItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControllItem.options && getControllItem.options.length > 0
                ? getControllItem.options.map((optionItem) => (
                    <SelectItem
                      key={optionItem.id}
                      value={optionItem.id}
                    ></SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControllItem.name}
            placeholder={getControllItem.placeholder}
            id={getControllItem.name}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControllItem.name]: e.target.value,
              })
            }
          />
        );

        break;

      default:
        element = (
          <Input
            name={getControllItem.name}
            placeholder={getControllItem.placeholder}
            id={getControllItem.name}
            type={getControllItem.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControllItem.name]: e.target.value,
              })
            }
          />
        );

        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1"> {controlItem.label} </Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full ">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
