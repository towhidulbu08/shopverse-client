import { Eye, EyeOff } from "lucide-react"; // Using lucide-react icons
import { useState } from "react";
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
  const [showPasswordFields, setShowPasswordFields] = useState({});

  const toggleShowPassword = (fieldName) => {
    setShowPasswordFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const renderInputsByComponentType = (getControllItem) => {
    let element = null;
    const value = formData[getControllItem.name] || "";

    switch (getControllItem.componentType) {
      case types.INPUT:
        if (getControllItem.type === "password") {
          element = (
            <div className="relative w-full">
              <Input
                name={getControllItem.name}
                placeholder={getControllItem.placeholder}
                id={getControllItem.name}
                type={
                  showPasswordFields[getControllItem.name] ? "text" : "password"
                }
                value={value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [getControllItem.name]: e.target.value,
                  })
                }
              />
              <button
                type="button"
                onClick={() => toggleShowPassword(getControllItem.name)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {!showPasswordFields[getControllItem.name] ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          );
        } else {
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
        }
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
                    <SelectItem key={optionItem.id} value={optionItem.id} />
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
            <Label className="mb-1">{controlItem.label}</Label>
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
