export interface IService {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface IServiceCardProps {
  service: IService;
}
