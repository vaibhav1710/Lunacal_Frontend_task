import React, {FC} from 'react'

type TextAreaProps = {
    value: string;
}

const TextArea: FC<TextAreaProps> = ({value}) => {
  return (
    
      	<div className="w-[95%] h-[90%] rounded-xl text-justify">
						{value === "About Me" && (
							<div className="h-full w-full overflow-y-scroll my-scrollbar">
								<p className="text-gray-400 m-2">
									I'm a majorly a backend developer who is looking to just get an
								    internship in any role. I know how to complete task on time and I'm very confident that I can master any tech stack. 
									<br />
									<br /> I'm a majorly a backend developer who is looking to just get an
								    internship in any role. I know how to complete task on time and I'm very confident that I can master any tech stack. 
									<br />
									<br />
									I'm a majorly a backend developer who is looking to just get an
								    internship in any role. I know how to complete task on time and I'm very confident that I can master any tech stack.
									<br/>
									<br/>
									I'm a majorly a backend developer who is looking to just get an
								    internship in any role. I know how to complete task on time and I'm very confident that I can master any tech stack. 
								</p>
							</div>
						)}
						{value === "Experience" && (
							<div className="h-full w-full overflow-y-scroll my-scrollbar">
								<p className="text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur aperiam libero obcaecati quae consequatur ullam, beatae iusto iure velit ducimus ad hic accusamus placeat asperiores rerum adipisci ea aliquam.
									<br />
									<br />
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nulla hic nobis at accusamus sunt suscipit autem temporibus culpa corporis. Eaque, mollitia expedita soluta eum sit numquam reiciendis! Enim officia, dolorum animi similique magnam dolore!
									<br />
									<br />
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur quo voluptate non quos sunt modi sed corrupti rem placeat.
									<br />
									<br />
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quisquam dolorem. Ratione nam nihil earum.
								</p>
							</div>
						)}
						{value === "Recommended" && (
							<div className="h-full w-full overflow-y-scroll my-scrollbar">
								<p className="text-gray-400">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro id tenetur maxime voluptatem at cupiditate, architecto nostrum reprehenderit, explicabo esse blanditiis eligendi atque dolor magnam inventore sed facere, numquam perspiciatis.
									<br />
									<br />
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, a voluptatum cupiditate commodi ratione reiciendis eligendi quia distinctio nisi, quis tenetur, beatae possimus nemo reprehenderit inventore eum neque placeat.
									<br />
									<br />
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus cumque repellat ad sunt velit voluptatem ab ut ratione, nobis dolorum, maiores labore veritatis est possimus nesciunt fugit, qui laborum minima iste. Soluta, commodi.
									
								</p>
							</div>
						)}
					</div>
  )
}

export default TextArea
